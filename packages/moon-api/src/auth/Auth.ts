import { ContentType, HttpClient, RequestParams } from '../lib/http-client';
import {
	ProfileResponse,
	RefreshTokenInput,
	RefreshTokenResponse,
} from './data-contracts';

export class Auth<
	SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
	/**
	 * No description
	 *
	 * @tags Accounts
	 * @name TransferEth
	 * @request POST:/accounts/{accountName}/transfer-eth
	 */
	refreshToken = (data: RefreshTokenInput, params: RequestParams = {}) =>
		this.request<RefreshTokenResponse, any>({
			path: `/auth/refresh-token`,
			method: 'POST',
			body: data,
			type: ContentType.Json,
			format: 'json',
			...params,
		});

	profile = (params: RequestParams = {}) =>
		this.request<ProfileResponse, any>({
			path: `/auth/profile`,
			method: 'GET',
			format: 'json',
			...params,
		});
}
