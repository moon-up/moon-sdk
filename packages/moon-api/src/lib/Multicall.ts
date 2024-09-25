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
  CreateJobData,
  DeleteHistoryEntryData,
  DeleteJobData,
  DeleteJobHistoryData,
  EditHistoryEntryData,
  EditJobData,
  ExecuteJobData,
  GetHistoryEntryData,
  GetJobData,
  GetJobHistoryData,
  GetJobResultData,
  GetScheduledJobsData,
  ListAllHistoryData,
  ListAllJobsData,
  MonitorJobData,
  MultiCallInputBody,
  PartialHistory,
  PartialJobs,
  ScheduleJobBody,
  ScheduleJobData,
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
}
