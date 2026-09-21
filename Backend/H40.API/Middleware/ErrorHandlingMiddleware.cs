using Microsoft.AspNetCore.Http;
using System;
using System.Threading.Tasks;

namespace H40.API.Middleware
{
    public class ErrorHandlingMiddleware
    {
        private readonly RequestDelegate _next;
        public ErrorHandlingMiddleware(RequestDelegate next) { _next = next; }
        public async Task Invoke(HttpContext context)
        {
            try { await _next(context); }
            catch (Exception ex) { context.Response.StatusCode = 500; await context.Response.WriteAsync("An unexpected error occurred."); }
        }
    }
}