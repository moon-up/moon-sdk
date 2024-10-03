/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  CreateFlowBody,
  CreateFlowData,
  CreateJobData,
  CreateUserDefinedFunctionData,
  CreateUserDefinedFunctionPayload,
  DeleteFlowData,
  DeleteJobData,
  DeleteUserDefinedFunctionData,
  ExecuteJobData,
  GetFlowData,
  GetJobData,
  GetJobResultData,
  GetNotificationsData,
  GetScheduledJobsData,
  ListFlowsData,
  ListJobsData,
  ListUserDefinedFunctionsData,
  MarkNotificationAsReadData,
  MultiCallInputBody,
  ScheduleJobBody,
  ScheduleJobData,
  UnscheduleJobData,
  UpdateFlowBody,
  UpdateFlowData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Multicall<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags MultiCall
   * @name CreateFlow
   * @request POST:/multicall/flows
   * @secure
   */
  createFlow = (data: CreateFlowBody, params: RequestParams = {}) =>
    this.http.request<CreateFlowData, any>({
      path: `/multicall/flows`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MultiCall
   * @name CreateJob
   * @request POST:/multicall/create-job
   * @secure
   */
  createJob = (data: MultiCallInputBody, params: RequestParams = {}) =>
    this.http.request<CreateJobData, any>({
      path: `/multicall/create-job`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MultiCall
   * @name CreateUserDefinedFunction
   * @request POST:/multicall/user-defined-functions
   * @secure
   */
  createUserDefinedFunction = (
    data: CreateUserDefinedFunctionPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateUserDefinedFunctionData, any>({
      path: `/multicall/user-defined-functions`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MultiCall
   * @name DeleteFlow
   * @request DELETE:/multicall/flows/{flowId}
   * @secure
   */
  deleteFlow = (flowId: string, params: RequestParams = {}) =>
    this.http.request<DeleteFlowData, any>({
      path: `/multicall/flows/${flowId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MultiCall
   * @name DeleteJob
   * @request DELETE:/multicall/job/{jobId}
   * @secure
   */
  deleteJob = (jobId: string, params: RequestParams = {}) =>
    this.http.request<DeleteJobData, any>({
      path: `/multicall/job/${jobId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MultiCall
   * @name DeleteUserDefinedFunction
   * @request DELETE:/multicall/user-defined-functions/{functionId}
   * @secure
   */
  deleteUserDefinedFunction = (
    functionId: string,
    params: RequestParams = {}
  ) =>
    this.http.request<DeleteUserDefinedFunctionData, any>({
      path: `/multicall/user-defined-functions/${functionId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MultiCall
   * @name ExecuteJob
   * @request POST:/multicall/execute-job/{jobId}
   * @secure
   */
  executeJob = (jobId: string, params: RequestParams = {}) =>
    this.http.request<ExecuteJobData, any>({
      path: `/multicall/execute-job/${jobId}`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MultiCall
   * @name GetFlow
   * @request GET:/multicall/flows/{flowId}
   * @secure
   */
  getFlow = (flowId: string, params: RequestParams = {}) =>
    this.http.request<GetFlowData, any>({
      path: `/multicall/flows/${flowId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MultiCall
   * @name GetJob
   * @request GET:/multicall/job/{jobId}
   * @secure
   */
  getJob = (jobId: string, params: RequestParams = {}) =>
    this.http.request<GetJobData, any>({
      path: `/multicall/job/${jobId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MultiCall
   * @name GetJobResult
   * @request GET:/multicall/job-result/{jobId}
   * @secure
   */
  getJobResult = (jobId: string, params: RequestParams = {}) =>
    this.http.request<GetJobResultData, any>({
      path: `/multicall/job-result/${jobId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MultiCall
   * @name GetNotifications
   * @request GET:/multicall/notifications
   * @secure
   */
  getNotifications = (params: RequestParams = {}) =>
    this.http.request<GetNotificationsData, any>({
      path: `/multicall/notifications`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MultiCall
   * @name GetScheduledJobs
   * @request GET:/multicall/scheduled-jobs
   * @secure
   */
  getScheduledJobs = (params: RequestParams = {}) =>
    this.http.request<GetScheduledJobsData, any>({
      path: `/multicall/scheduled-jobs`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MultiCall
   * @name ListFlows
   * @request GET:/multicall/flows
   * @secure
   */
  listFlows = (params: RequestParams = {}) =>
    this.http.request<ListFlowsData, any>({
      path: `/multicall/flows`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MultiCall
   * @name ListJobs
   * @request GET:/multicall/jobs
   * @secure
   */
  listJobs = (params: RequestParams = {}) =>
    this.http.request<ListJobsData, any>({
      path: `/multicall/jobs`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MultiCall
   * @name ListUserDefinedFunctions
   * @request GET:/multicall/user-defined-functions
   * @secure
   */
  listUserDefinedFunctions = (params: RequestParams = {}) =>
    this.http.request<ListUserDefinedFunctionsData, any>({
      path: `/multicall/user-defined-functions`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MultiCall
   * @name MarkNotificationAsRead
   * @request POST:/multicall/notifications/{notificationId}/mark-as-read
   * @secure
   */
  markNotificationAsRead = (
    notificationId: string,
    params: RequestParams = {}
  ) =>
    this.http.request<MarkNotificationAsReadData, any>({
      path: `/multicall/notifications/${notificationId}/mark-as-read`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MultiCall
   * @name ScheduleJob
   * @request POST:/multicall/schedule-job
   * @secure
   */
  scheduleJob = (data: ScheduleJobBody, params: RequestParams = {}) =>
    this.http.request<ScheduleJobData, any>({
      path: `/multicall/schedule-job`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MultiCall
   * @name UnscheduleJob
   * @request POST:/multicall/unschedule-job/{jobId}
   * @secure
   */
  unscheduleJob = (jobId: string, params: RequestParams = {}) =>
    this.http.request<UnscheduleJobData, any>({
      path: `/multicall/unschedule-job/${jobId}`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MultiCall
   * @name UpdateFlow
   * @request PUT:/multicall/flows/{flowId}
   * @secure
   */
  updateFlow = (
    flowId: string,
    data: UpdateFlowBody,
    params: RequestParams = {}
  ) =>
    this.http.request<UpdateFlowData, any>({
      path: `/multicall/flows/${flowId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
