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
  CallWebhookData,
  CreateFlowBody,
  CreateFlowData,
  CreateJobData,
  CreateUserDefinedFunctionBody,
  CreateUserDefinedFunctionData,
  DeleteFlowData,
  DeleteHistoryEntryData,
  DeleteJobData,
  DeleteJobHistoryData,
  DeleteUserDefinedFunctionData,
  EditHistoryEntryData,
  EditJobData,
  ExecuteFlowData,
  ExecuteJobData,
  GetFlowData,
  GetHistoryEntryData,
  GetJobData,
  GetJobHistoryData,
  GetJobResultData,
  GetScheduledJobsData,
  GetUserDefinedFunctionData,
  ListAllHistoryData,
  ListAllJobsData,
  ListAvailableFunctionsData,
  ListFlowsData,
  ListUserDefinedFunctionsData,
  MonitorJobData,
  MultiCallInputBody,
  PartialHistory,
  PartialJobs,
  ScheduleJobBody,
  ScheduleJobData,
  UpdateFlowBody,
  UpdateFlowData,
  UpdateUserDefinedFunctionBody,
  UpdateUserDefinedFunctionData,
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
   * @name CallWebhook
   * @request POST:/multicall/call-webhook/{jobId}
   * @secure
   */
  callWebhook = (jobId: string, params: RequestParams = {}) =>
    this.http.request<CallWebhookData, any>({
      path: `/multicall/call-webhook/${jobId}`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
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
    data: CreateUserDefinedFunctionBody,
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
   * @name DeleteHistoryEntry
   * @request DELETE:/multicall/history/{historyId}
   * @secure
   */
  deleteHistoryEntry = (historyId: string, params: RequestParams = {}) =>
    this.http.request<DeleteHistoryEntryData, any>({
      path: `/multicall/history/${historyId}`,
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
   * @request POST:/multicall/delete-job/{jobId}
   * @secure
   */
  deleteJob = (jobId: string, params: RequestParams = {}) =>
    this.http.request<DeleteJobData, any>({
      path: `/multicall/delete-job/${jobId}`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MultiCall
   * @name DeleteJobHistory
   * @request DELETE:/multicall/job/{jobId}/history
   * @secure
   */
  deleteJobHistory = (jobId: string, params: RequestParams = {}) =>
    this.http.request<DeleteJobHistoryData, any>({
      path: `/multicall/job/${jobId}/history`,
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
   * @name EditHistoryEntry
   * @request PUT:/multicall/history/{historyId}
   * @secure
   */
  editHistoryEntry = (
    historyId: string,
    data: PartialHistory,
    params: RequestParams = {}
  ) =>
    this.http.request<EditHistoryEntryData, any>({
      path: `/multicall/history/${historyId}`,
      method: 'PUT',
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
   * @name EditJob
   * @request PUT:/multicall/job/{jobId}
   * @secure
   */
  editJob = (jobId: string, data: PartialJobs, params: RequestParams = {}) =>
    this.http.request<EditJobData, any>({
      path: `/multicall/job/${jobId}`,
      method: 'PUT',
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
   * @name ExecuteFlow
   * @request POST:/multicall/execute-flow/{flowId}
   * @secure
   */
  executeFlow = (flowId: string, params: RequestParams = {}) =>
    this.http.request<ExecuteFlowData, any>({
      path: `/multicall/execute-flow/${flowId}`,
      method: 'POST',
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
   * @name GetHistoryEntry
   * @request GET:/multicall/history/{historyId}
   * @secure
   */
  getHistoryEntry = (historyId: string, params: RequestParams = {}) =>
    this.http.request<GetHistoryEntryData, any>({
      path: `/multicall/history/${historyId}`,
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
   * @name GetJobHistory
   * @request GET:/multicall/job/{jobId}/history
   * @secure
   */
  getJobHistory = (jobId: string, params: RequestParams = {}) =>
    this.http.request<GetJobHistoryData, any>({
      path: `/multicall/job/${jobId}/history`,
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
   * @name GetUserDefinedFunction
   * @request GET:/multicall/user-defined-functions/{functionId}
   * @secure
   */
  getUserDefinedFunction = (functionId: string, params: RequestParams = {}) =>
    this.http.request<GetUserDefinedFunctionData, any>({
      path: `/multicall/user-defined-functions/${functionId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MultiCall
   * @name ListAllHistory
   * @request GET:/multicall/history
   * @secure
   */
  listAllHistory = (params: RequestParams = {}) =>
    this.http.request<ListAllHistoryData, any>({
      path: `/multicall/history`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MultiCall
   * @name ListAllJobs
   * @request GET:/multicall/jobs
   * @secure
   */
  listAllJobs = (params: RequestParams = {}) =>
    this.http.request<ListAllJobsData, any>({
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
   * @name ListAvailableFunctions
   * @request GET:/multicall/available-functions
   * @secure
   */
  listAvailableFunctions = (params: RequestParams = {}) =>
    this.http.request<ListAvailableFunctionsData, any>({
      path: `/multicall/available-functions`,
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
   * @name MonitorJob
   * @request POST:/multicall/monitor-job/{jobId}
   * @secure
   */
  monitorJob = (jobId: string, params: RequestParams = {}) =>
    this.http.request<MonitorJobData, any>({
      path: `/multicall/monitor-job/${jobId}`,
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
  /**
   * No description
   *
   * @tags MultiCall
   * @name UpdateUserDefinedFunction
   * @request PUT:/multicall/user-defined-functions/{functionId}
   * @secure
   */
  updateUserDefinedFunction = (
    functionId: string,
    data: UpdateUserDefinedFunctionBody,
    params: RequestParams = {}
  ) =>
    this.http.request<UpdateUserDefinedFunctionData, any>({
      path: `/multicall/user-defined-functions/${functionId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
