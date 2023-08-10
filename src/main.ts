import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import logger from './utils/logger'
import { APP } from './app.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
bootstrap().then(() => {
  logger.info(`Magazine is running on  ${APP.PORT}.`)
})
