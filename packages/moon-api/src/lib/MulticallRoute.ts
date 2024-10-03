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

export namespace Multicall {
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
    export type RequestBody = CreateUserDefinedFunctionPayload;
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
   * @name DeleteJob
   * @request DELETE:/multicall/job/{jobId}
   * @secure
   */
  export namespace DeleteJob {
    export type RequestParams = {
      jobId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DeleteJobData;
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
   * @name GetNotifications
   * @request GET:/multicall/notifications
   * @secure
   */
  export namespace GetNotifications {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetNotificationsData;
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
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetScheduledJobsData;
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
   * @name ListJobs
   * @request GET:/multicall/jobs
   * @secure
   */
  export namespace ListJobs {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ListJobsData;
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
   * @name MarkNotificationAsRead
   * @request POST:/multicall/notifications/{notificationId}/mark-as-read
   * @secure
   */
  export namespace MarkNotificationAsRead {
    export type RequestParams = {
      notificationId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = MarkNotificationAsReadData;
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
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ScheduleJobData;
  }

  /**
   * No description
   * @tags MultiCall
   * @name UnscheduleJob
   * @request POST:/multicall/unschedule-job/{jobId}
   * @secure
   */
  export namespace UnscheduleJob {
    export type RequestParams = {
      jobId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = UnscheduleJobData;
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
}
