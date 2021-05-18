export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CreateJobInput = {
  queue: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSON']>;
  options?: Maybe<Scalars['JSON']>;
};


export type Job = {
  id: Scalars['ID'];
  name: Scalars['String'];
  data?: Maybe<Scalars['String']>;
  status: JobStatus;
  returnValue?: Maybe<Scalars['String']>;
  progress: Scalars['Int'];
  attemptsMade: Scalars['Int'];
  failedReason?: Maybe<Scalars['String']>;
  stacktrace: Array<Maybe<Scalars['String']>>;
  logs?: Maybe<JobLogs>;
  delay?: Maybe<Scalars['Float']>;
  timestamp: Scalars['Float'];
  finishedOn?: Maybe<Scalars['Float']>;
  processedOn?: Maybe<Scalars['Float']>;
  opts: Scalars['String'];
};

export type JobLogs = {
  count: Scalars['Int'];
  logs: Array<Maybe<Scalars['String']>>;
};

export enum JobStatus {
  Completed = 'completed',
  Waiting = 'waiting',
  Active = 'active',
  Delayed = 'delayed',
  Failed = 'failed',
  Paused = 'paused'
}

export enum JobStatusClean {
  Completed = 'completed',
  Wait = 'wait',
  Active = 'active',
  Delayed = 'delayed',
  Failed = 'failed',
  Paused = 'paused'
}

export type Mutation = {
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queuepause */
  pauseQueue?: Maybe<Queue>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queueresume */
  resumeQueue?: Maybe<Queue>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queueclose */
  closeQueue?: Maybe<Queue>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queueclean */
  cleanQueue: Array<Maybe<Scalars['ID']>>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queueempty */
  emptyQueue?: Maybe<Queue>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#jobremove */
  removeJob?: Maybe<Job>;
  /** calls https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#jobremove on every passed job */
  removeJobs: Array<Maybe<Job>>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#jobmovetocompleted */
  moveJobToCompleted?: Maybe<Job>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#jobmovetofailed */
  moveJobToFailed?: Maybe<Job>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#jobdiscard */
  discardJob?: Maybe<Job>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#jobpromote */
  promoteJob?: Maybe<Job>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#jobupdate */
  updateJobData?: Maybe<Job>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#jobretry */
  retryJob?: Maybe<Job>;
  /** calls https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#jobretry on every passed job */
  retryJobs: Array<Maybe<Job>>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#joblog */
  log?: Maybe<Job>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queueadd */
  createJob?: Maybe<Job>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queueremovejobs */
  removeJobsByPattern?: Maybe<Scalars['Boolean']>;
};


export type MutationPauseQueueArgs = {
  queue: Scalars['String'];
};


export type MutationResumeQueueArgs = {
  queue: Scalars['String'];
};


export type MutationCloseQueueArgs = {
  queue: Scalars['String'];
};


export type MutationCleanQueueArgs = {
  queue: Scalars['String'];
  grace?: Maybe<Scalars['Int']>;
  status: JobStatusClean;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationEmptyQueueArgs = {
  queue: Scalars['String'];
};


export type MutationRemoveJobArgs = {
  queue: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationRemoveJobsArgs = {
  queue: Scalars['String'];
  jobs: Array<Scalars['ID']>;
};


export type MutationMoveJobToCompletedArgs = {
  queue: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationMoveJobToFailedArgs = {
  queue: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationDiscardJobArgs = {
  queue: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationPromoteJobArgs = {
  queue: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationUpdateJobDataArgs = {
  queue: Scalars['String'];
  id: Scalars['ID'];
  data?: Maybe<Scalars['JSON']>;
};


export type MutationRetryJobArgs = {
  queue: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationRetryJobsArgs = {
  queue: Scalars['String'];
  jobs: Array<Scalars['ID']>;
};


export type MutationLogArgs = {
  queue: Scalars['String'];
  id: Scalars['ID'];
  row: Scalars['String'];
};


export type MutationCreateJobArgs = {
  input: CreateJobInput;
};


export type MutationRemoveJobsByPatternArgs = {
  queue: Scalars['String'];
  pattern: Scalars['String'];
};

export enum OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Query = {
  queues?: Maybe<Array<Queue>>;
  queue?: Maybe<Queue>;
  jobs: Array<Job>;
  job?: Maybe<Job>;
  redisInfo?: Maybe<RedisInfo>;
};


export type QueryQueueArgs = {
  name: Scalars['String'];
};


export type QueryJobsArgs = {
  queue: Scalars['String'];
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  status?: Maybe<JobStatus>;
  order?: Maybe<OrderEnum>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QueryJobArgs = {
  queue: Scalars['String'];
  id: Scalars['ID'];
};

export type Queue = {
  name: Scalars['String'];
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queuecount */
  count: Scalars['Int'];
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queuegetjobcounts */
  jobsCounts: QueueJobsCounts;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queuegetcompletedcount */
  completedCount: Scalars['Int'];
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queuegetfailedcount */
  failedCount: Scalars['Int'];
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queuegetdelayedcount */
  delayedCount: Scalars['Int'];
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queuegetactivecount */
  activeCount: Scalars['Int'];
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queuegetwaitingcount */
  waitingCount: Scalars['Int'];
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queuegetpausedcount */
  pausedCount: Scalars['Int'];
  jobs: Array<Maybe<Job>>;
  isPaused: Scalars['Boolean'];
};

export type QueueJobsCounts = {
  waiting: Scalars['Int'];
  active: Scalars['Int'];
  completed: Scalars['Int'];
  failed: Scalars['Int'];
  delayed: Scalars['Int'];
  paused: Scalars['Int'];
};

export type RedisInfo = {
  redis_version: Scalars['String'];
  used_memory: Scalars['String'];
  used_memory_human: Scalars['String'];
  used_memory_peak: Scalars['String'];
  used_memory_peak_human: Scalars['String'];
  used_memory_peak_perc: Scalars['String'];
  used_memory_overhead: Scalars['String'];
  used_memory_startup: Scalars['String'];
  total_system_memory: Scalars['String'];
  total_system_memory_human: Scalars['String'];
  maxmemory: Scalars['String'];
  maxmemory_human: Scalars['String'];
  mem_fragmentation_ratio: Scalars['String'];
  mem_fragmentation_bytes: Scalars['String'];
  connected_clients: Scalars['String'];
  blocked_clients: Scalars['String'];
  redis_mode: Scalars['String'];
  os: Scalars['String'];
  arch_bits: Scalars['String'];
  uptime_in_seconds: Scalars['String'];
  uptime_in_days: Scalars['String'];
  used_cpu_sys: Scalars['String'];
  tcp_port: Scalars['String'];
};


export type CommonJobFieldsFragment = Pick<Job, 'id' | 'progress' | 'attemptsMade' | 'failedReason' | 'status' | 'stacktrace' | 'timestamp' | 'returnValue' | 'finishedOn' | 'processedOn' | 'name' | 'opts' | 'delay'>;

export type CleanQueueMutationVariables = Exact<{
  queue: Scalars['String'];
  status: JobStatusClean;
}>;


export type CleanQueueMutation = Pick<Mutation, 'cleanQueue'>;

export type CloseQueueMutationVariables = Exact<{
  queue: Scalars['String'];
}>;


export type CloseQueueMutation = { closeQueue?: Maybe<Pick<Queue, 'name'>> };

export type CreateJobLogMutationVariables = Exact<{
  queue: Scalars['String'];
  id: Scalars['ID'];
  row: Scalars['String'];
}>;


export type CreateJobLogMutation = { log?: Maybe<Pick<Job, 'id'>> };

export type CreateJobMutationVariables = Exact<{
  input: CreateJobInput;
}>;


export type CreateJobMutation = { createJob?: Maybe<Pick<Job, 'id'>> };

export type DiscardJobMutationVariables = Exact<{
  queue: Scalars['String'];
  id: Scalars['ID'];
}>;


export type DiscardJobMutation = { discardJob?: Maybe<Pick<Job, 'id'>> };

export type EmptyQueueMutationVariables = Exact<{
  queue: Scalars['String'];
}>;


export type EmptyQueueMutation = { emptyQueue?: Maybe<Pick<Queue, 'name'>> };

export type MoveJobToCompletedMutationVariables = Exact<{
  queue: Scalars['String'];
  id: Scalars['ID'];
}>;


export type MoveJobToCompletedMutation = { moveJobToCompleted?: Maybe<Pick<Job, 'id'>> };

export type MoveJobToFailedMutationVariables = Exact<{
  queue: Scalars['String'];
  id: Scalars['ID'];
}>;


export type MoveJobToFailedMutation = { moveJobToFailed?: Maybe<Pick<Job, 'id'>> };

export type PauseQueueMutationVariables = Exact<{
  queue: Scalars['String'];
}>;


export type PauseQueueMutation = { pauseQueue?: Maybe<Pick<Queue, 'name'>> };

export type PromoteJobMutationVariables = Exact<{
  queue: Scalars['String'];
  id: Scalars['ID'];
}>;


export type PromoteJobMutation = { promoteJob?: Maybe<Pick<Job, 'id'>> };

export type RemoveJobMutationVariables = Exact<{
  queue: Scalars['String'];
  id: Scalars['ID'];
}>;


export type RemoveJobMutation = { removeJob?: Maybe<Pick<Job, 'id'>> };

export type RemoveJobsByPatternMutationVariables = Exact<{
  queue: Scalars['String'];
  pattern: Scalars['String'];
}>;


export type RemoveJobsByPatternMutation = Pick<Mutation, 'removeJobsByPattern'>;

export type RemoveJobsMutationVariables = Exact<{
  queue: Scalars['String'];
  jobs: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type RemoveJobsMutation = { removeJobs: Array<Maybe<Pick<Job, 'id'>>> };

export type ResumeQueueMutationVariables = Exact<{
  queue: Scalars['String'];
}>;


export type ResumeQueueMutation = { resumeQueue?: Maybe<Pick<Queue, 'name'>> };

export type RetryJobMutationVariables = Exact<{
  queue: Scalars['String'];
  id: Scalars['ID'];
}>;


export type RetryJobMutation = { retryJob?: Maybe<Pick<Job, 'id'>> };

export type RetryJobsMutationVariables = Exact<{
  queue: Scalars['String'];
  jobs: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type RetryJobsMutation = { retryJobs: Array<Maybe<Pick<Job, 'id'>>> };

export type UpdateJobDataMutationVariables = Exact<{
  queue: Scalars['String'];
  id: Scalars['ID'];
  data?: Maybe<Scalars['JSON']>;
}>;


export type UpdateJobDataMutation = { updateJobData?: Maybe<Pick<Job, 'id'>> };

export type GetJobByIdQueryVariables = Exact<{
  queue: Scalars['String'];
  id: Scalars['ID'];
}>;


export type GetJobByIdQuery = { job?: Maybe<CommonJobFieldsFragment> };

export type GetJobDataQueryVariables = Exact<{
  queue: Scalars['String'];
  id: Scalars['ID'];
}>;


export type GetJobDataQuery = { job?: Maybe<Pick<Job, 'data'>> };

export type GetJobLogsQueryVariables = Exact<{
  queue: Scalars['String'];
  id: Scalars['ID'];
}>;


export type GetJobLogsQuery = { job?: Maybe<{ logs?: Maybe<Pick<JobLogs, 'logs' | 'count'>> }> };

export type GetJobsQueryVariables = Exact<{
  queue: Scalars['String'];
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  status?: Maybe<JobStatus>;
  order?: Maybe<OrderEnum>;
  id?: Maybe<Scalars['ID']>;
}>;


export type GetJobsQuery = { jobs: Array<CommonJobFieldsFragment> };

export type GetQueuesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQueuesQuery = { queues?: Maybe<Array<(
    Pick<Queue, 'name' | 'isPaused'>
    & { jobsCounts: Pick<QueueJobsCounts, 'waiting' | 'active' | 'completed' | 'failed' | 'delayed' | 'paused'> }
  )>> };

export type GetRedisInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRedisInfoQuery = { redisInfo?: Maybe<Pick<RedisInfo, 'redis_version' | 'redis_mode' | 'used_memory_human' | 'used_memory_peak_human' | 'total_system_memory_human' | 'connected_clients' | 'blocked_clients' | 'mem_fragmentation_ratio' | 'os' | 'uptime_in_seconds' | 'used_cpu_sys' | 'tcp_port'>> };
