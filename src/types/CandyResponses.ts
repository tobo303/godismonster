// All hail Johan Nordström for this! May ze kittehs be with you!

type CandyErrorResponse = {
	status: "error";
	message: string;
}

type CandyFailResponse = {
	status: "fail";
	data: {key: string[], path: string[]}[];
}

/* Generic Type (Alias) */
type CandySuccessResponse<T> = {
	status: "success";
	data: T;
}

export type CandyResponse<T> = CandySuccessResponse<T> | CandyErrorResponse | CandyFailResponse;