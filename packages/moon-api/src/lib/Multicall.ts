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
  DeleteJobData,
  ExecuteJobData,
  GetJobResultData,
  GetScheduledJobsData,
  MonitorJobData,
  MultiCallInputBody,
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
