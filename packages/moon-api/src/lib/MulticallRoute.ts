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
   * @name CreateFlow
   * @request POST:/multicall/flows
   * @secure
   */
  export namespace CreateFlow {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateFlowBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateFlowData;
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
   * @name CreateUserDefinedFunction
   * @request POST:/multicall/user-defined-functions
   * @secure
   */
  export namespace CreateUserDefinedFunction {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateUserDefinedFunctionBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateUserDefinedFunctionData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name DeleteFlow
   * @request DELETE:/multicall/flows/{flowId}
   * @secure
   */
  export namespace DeleteFlow {
    export type RequestParams = {
      flowId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DeleteFlowData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name DeleteHistoryEntry
   * @request DELETE:/multicall/history/{historyId}
   * @secure
   */
  export namespace DeleteHistoryEntry {
    export type RequestParams = {
      historyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DeleteHistoryEntryData;
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
   * @name DeleteJobHistory
   * @request DELETE:/multicall/job/{jobId}/history
   * @secure
   */
  export namespace DeleteJobHistory {
    export type RequestParams = {
      jobId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DeleteJobHistoryData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name DeleteUserDefinedFunction
   * @request DELETE:/multicall/user-defined-functions/{functionId}
   * @secure
   */
  export namespace DeleteUserDefinedFunction {
    export type RequestParams = {
      functionId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DeleteUserDefinedFunctionData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name EditHistoryEntry
   * @request PUT:/multicall/history/{historyId}
   * @secure
   */
  export namespace EditHistoryEntry {
    export type RequestParams = {
      historyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PartialHistory;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = EditHistoryEntryData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name EditJob
   * @request PUT:/multicall/job/{jobId}
   * @secure
   */
  export namespace EditJob {
    export type RequestParams = {
      jobId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PartialJobs;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = EditJobData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name ExecuteFlow
   * @request POST:/multicall/execute-flow/{flowId}
   * @secure
   */
  export namespace ExecuteFlow {
    export type RequestParams = {
      flowId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ExecuteFlowData;
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
   * @name GetFlow
   * @request GET:/multicall/flows/{flowId}
   * @secure
   */
  export namespace GetFlow {
    export type RequestParams = {
      flowId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetFlowData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name GetHistoryEntry
   * @request GET:/multicall/history/{historyId}
   * @secure
   */
  export namespace GetHistoryEntry {
    export type RequestParams = {
      historyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetHistoryEntryData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name GetJob
   * @request GET:/multicall/job/{jobId}
   * @secure
   */
  export namespace GetJob {
    export type RequestParams = {
      jobId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetJobData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name GetJobHistory
   * @request GET:/multicall/job/{jobId}/history
   * @secure
   */
  export namespace GetJobHistory {
    export type RequestParams = {
      jobId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetJobHistoryData;
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
   * @name GetUserDefinedFunction
   * @request GET:/multicall/user-defined-functions/{functionId}
   * @secure
   */
  export namespace GetUserDefinedFunction {
    export type RequestParams = {
      functionId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetUserDefinedFunctionData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name ListAllHistory
   * @request GET:/multicall/history
   * @secure
   */
  export namespace ListAllHistory {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ListAllHistoryData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name ListAllJobs
   * @request GET:/multicall/jobs
   * @secure
   */
  export namespace ListAllJobs {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ListAllJobsData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name ListAvailableFunctions
   * @request GET:/multicall/available-functions
   * @secure
   */
  export namespace ListAvailableFunctions {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ListAvailableFunctionsData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name ListFlows
   * @request GET:/multicall/flows
   * @secure
   */
  export namespace ListFlows {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ListFlowsData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name ListUserDefinedFunctions
   * @request GET:/multicall/user-defined-functions
   * @secure
   */
  export namespace ListUserDefinedFunctions {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ListUserDefinedFunctionsData;
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

  /**
   * No description
   * @tags MultiCall
   * @name UpdateFlow
   * @request PUT:/multicall/flows/{flowId}
   * @secure
   */
  export namespace UpdateFlow {
    export type RequestParams = {
      flowId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateFlowBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = UpdateFlowData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name UpdateUserDefinedFunction
   * @request PUT:/multicall/user-defined-functions/{functionId}
   * @secure
   */
  export namespace UpdateUserDefinedFunction {
    export type RequestParams = {
      functionId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateUserDefinedFunctionBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = UpdateUserDefinedFunctionData;
  }
}
