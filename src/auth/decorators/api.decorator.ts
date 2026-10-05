import {applyDecorators} from "@nestjs/common";
import {ApiBearerAuth, ApiResponse} from "@nestjs/swagger";

export const ApiAuth = () => {
    return applyDecorators(
        ApiBearerAuth(),
        ApiResponse({
            status: 401,
            description: "Missing or invalid authentication token",
        }),
        ApiResponse({
            status: 403,
            description: "Insufficient permissions",
        }),
        ApiResponse({
            status: 500,
            description: "Internal server error",
        })
    )
}