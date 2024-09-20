import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Ctx, Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';

@Update()
@Injectable()
export class BotService {
  constructor(private readonly configService: ConfigService) {}

  @Start()
  async handleStart(@Ctx() ctx: Context) {
    ctx.reply(
      'Приветики!\nВ этом боте ты можешь отслеживать свои изменения, а именно: вес, грудь, талия и бедра. Также можно ставить себе напоминания о внесении изменений. А ещё можно увидеть как изменились твои данный с момента первого внесения.\n\nЕсли тебе захочется отслеживать другие изменения, ты можешь использовать команду /add_new_measure\n\nУдачи!',
    );
    ctx.reply('Внести первые изменения', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Открыть приложение',
              web_app: { url: this.configService.get('WEB_APP_URL') },
            },
          ],
        ],
      },
    });
  }
}
