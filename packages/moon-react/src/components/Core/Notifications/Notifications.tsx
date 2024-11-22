import { useEffect, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { useMoonAuth } from "../../../context";

export interface Notification {
	id: number;
	text: string;
	sender_id: number | null;
	receiver_id: number;
	read: boolean;
	created_at: string;
}

export const NotificationComponent = () => {
	const { supabaseClient: supabase, user } = useMoonAuth();
	const [notifications, setNotifications] = useState<Notification[]>([]);
	const [open, setOpen] = useState(false);
	const [selectedNotification, setSelectedNotification] =
		useState<Notification | null>(null);

	useEffect(() => {
		const fetchNotifications = async () => {
			if (user) {
				const { data, error } = await supabase
					.from("notifications")
					.select("*")
					.eq("receiver_id", user.id)
					.order("created_at", { ascending: false });

				if (error) {
					console.error("Error fetching notifications:", error);
				} else {
					setNotifications(data as Notification[]);
				}
			}
		};

		fetchNotifications();

		const channel = supabase
			.channel("notifications")
			.on(
				"postgres_changes",
				{
					event: "INSERT",
					schema: "public",
					table: "notifications",
					filter: `receiver_id=eq.${user?.id}`,
				},
				(payload) => {
					setNotifications((prevNotifications) => [
						...prevNotifications,
						payload.new as Notification,
					]);
				},
			)
			.subscribe();

		return () => {
			channel.unsubscribe();
		};
	}, [supabase, user]);

	const dismissNotification = async (notificationId: number) => {
		try {
			const { error } = await supabase
				.from("notifications")
				.update({ read: true })
				.eq("id", notificationId);

			if (error) {
				console.error("Error dismissing notification:", error);
			} else {
				setNotifications((prevNotifications) =>
					prevNotifications.map((notification) =>
						notification.id === notificationId
							? { ...notification, read: true }
							: notification,
					),
				);
			}
		} catch (error) {
			console.error("Error dismissing notification:", error);
		}
	};

	const openNotificationModal = (notification: Notification) => {
		setSelectedNotification(notification);
		setOpen(true);
	};

	const closeNotificationModal = () => {
		setSelectedNotification(null);
		setOpen(false);
	};

	return (
		<div className="fixed bottom-4 right-4 z-50">
			<AnimatePresence>
				{notifications.map((notification) => (
					<motion.div
						key={notification.id}
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 50 }}
						transition={{ duration: 0.3 }}
						className={`bg-white rounded-lg shadow-lg p-4 mb-4 ${
							notification.read ? "opacity-50" : ""
						}`}
					>
						<div className="flex justify-between items-center">
							<p
								className="text-gray-800 cursor-pointer"
								onClick={() => openNotificationModal(notification)}
							>
								{notification.text}
							</p>
							<button
								className="text-gray-500 hover:text-gray-800 focus:outline-none"
								onClick={() => dismissNotification(notification.id)}
							>
								<svg
									className="h-5 w-5"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M6 18L18 6M6 6l12 12"></path>
								</svg>
							</button>
						</div>
					</motion.div>
				))}
			</AnimatePresence>

			{/* Notification Modal */}
			<DialogPrimitive.Root open={open} onOpenChange={setOpen}>
				<AnimatePresence>
					{open && (
						<DialogPrimitive.Portal forceMount>
							<DialogPrimitive.Overlay
								className="fixed inset-0 bg-black/30"
								asChild
							>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.3 }}
									className="fixed inset-0 flex items-center justify-center"
								>
									<DialogPrimitive.Content
										asChild
										className="bg-white rounded-lg shadow-lg p-6 max-w-md"
									>
										<div>
											<DialogPrimitive.Title className="text-xl font-semibold mb-4">
												Notification
											</DialogPrimitive.Title>
											<DialogPrimitive.Description className="text-gray-600 mb-6">
												{selectedNotification?.text}
											</DialogPrimitive.Description>
											<div className="flex justify-end">
												<DialogPrimitive.Close asChild>
													<button
														className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none"
														onClick={closeNotificationModal}
													>
														Close
													</button>
												</DialogPrimitive.Close>
											</div>
										</div>
									</DialogPrimitive.Content>
								</motion.div>
							</DialogPrimitive.Overlay>
						</DialogPrimitive.Portal>
					)}
				</AnimatePresence>
			</DialogPrimitive.Root>
		</div>
	);
};

export default NotificationComponent;
