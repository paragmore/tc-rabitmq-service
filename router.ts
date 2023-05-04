import { FastifyInstance } from "fastify"
import rabitmqRoutes from "./routes/rabitmq.routes"
export default async(app: FastifyInstance)=>{
    app.register(rabitmqRoutes, {prefix:'/rabitmq'})
}