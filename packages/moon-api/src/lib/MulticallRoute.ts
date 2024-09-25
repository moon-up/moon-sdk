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

export namespace Multicall {
  /**
   * No description
   * @tags MultiCall
   * @name CallWebhook
   * @request POST:/multicall/call-webhook/{jobId}
   * @secure
   */
  export namespace CallWebhook {
    export type RequestParams = {
      jobId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CallWebhookData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name CreateJob
   * @request POST:/multicall/create-job
   * @secure
   */
  export namespace CreateJob {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MultiCallInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateJobData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name DeleteJob
   * @request POST:/multicall/delete-job/{jobId}
   * @secure
   */
  export namespace DeleteJob {
    export type RequestParams = {
      jobId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteJobData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name ExecuteJob
   * @request POST:/multicall/execute-job/{jobId}
   * @secure
   */
  export namespace ExecuteJob {
    export type RequestParams = {
      jobId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ExecuteJobData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name GetJobResult
   * @request GET:/multicall/job-result/{jobId}
   * @secure
   */
  export namespace GetJobResult {
    export type RequestParams = {
      jobId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetJobResultData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name GetScheduledJobs
   * @request GET:/multicall/scheduled-jobs
   * @secure
   */
  export namespace GetScheduledJobs {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetScheduledJobsData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name MonitorJob
   * @request POST:/multicall/monitor-job/{jobId}
   * @secure
   */
  export namespace MonitorJob {
    export type RequestParams = {
      jobId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = MonitorJobData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name ScheduleJob
   * @request POST:/multicall/schedule-job
   * @secure
   */
  export namespace ScheduleJob {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ScheduleJobBody;
    export type RequestHeaders = {};
    export type ResponseBody = ScheduleJobData;
  }
}
