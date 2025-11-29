import { NextRequest, NextResponse } from "next/server";
import {
  ExecuteRequestSchema,
  ExecuteSuccessResponseSchema,
  ExecuteErrorResponseSchema,
} from "@/app/types/api-contract";

/**
 * POST /api/execute
 *
 * Executes a yapi YAML request and returns the response.
 * This is a placeholder implementation - the backend logic will be implemented later.
 */
export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const parseResult = ExecuteRequestSchema.safeParse(body);

    if (!parseResult.success) {
      const errorResponse = ExecuteErrorResponseSchema.parse({
        success: false,
        error: "Invalid request format",
        errorType: "VALIDATION_ERROR",
        details: parseResult.error.format(),
      });
      return NextResponse.json(errorResponse, { status: 400 });
    }

    const { yaml } = parseResult.data;

    // TODO: Implement actual YAML parsing and HTTP execution
    // For now, return a mock successful response
    const mockResponse = ExecuteSuccessResponseSchema.parse({
      success: true,
      curlCommand: 'curl -X GET "https://api.github.com/users/octocat" \\\n  -H "Accept: application/json"',
      responseBody: {
        login: "octocat",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/octocat_happy.gif",
        type: "User",
        name: "The Octocat",
        company: "@github",
        blog: "https://github.blog",
        bio: null,
      },
      responseHeaders: {
        "content-type": "application/json; charset=utf-8",
        "x-ratelimit-limit": "60",
        "x-ratelimit-remaining": "59",
      },
      statusCode: 200,
      timing: 245,
    });

    return NextResponse.json(mockResponse);
  } catch (error) {
    console.error("Error in /api/execute:", error);

    const errorResponse = ExecuteErrorResponseSchema.parse({
      success: false,
      error: error instanceof Error ? error.message : "Internal server error",
      errorType: "UNKNOWN",
    });

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
