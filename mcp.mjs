import {McpServer} from '@modelcontextprotocol/server';
import {serveStdio} from '@modelcontextprotocol/server/stdio';
import {z} from 'zod';
import {pathToFileURL} from 'node:url';
import {callTool} from './public/core.js';
export function makeServer(){const server=new McpServer({name:'ali-serviceops',version:'0.1.0'});const register=(name,shape)=>server.registerTool(name,{description:`${name} using synthetic service records. No private CRM connection.`,inputSchema:z.object(shape),annotations:{readOnlyHint:true,destructiveHint:false,openWorldHint:false}},async args=>{const output=callTool(name,args);return {content:[{type:'text',text:JSON.stringify(output)}]};});register('list_services',{});register('quote_service',{service:z.enum(['exterior','interior','both']),units:z.number().int().min(1).max(200),stories:z.number().int().min(1).max(3)});register('get_job_status',{jobId:z.string().max(50)});return server;}
if(process.argv[1]&&pathToFileURL(process.argv[1]).href===import.meta.url)serveStdio(()=>makeServer());
