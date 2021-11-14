import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const APP_PORT = 3000;

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(APP_PORT);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
