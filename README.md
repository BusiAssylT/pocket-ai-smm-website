# Карманный ИИ-СММщик — сайт

Первая версия публичного сайта проекта «Карманный ИИ-СММщик» от ИИ-студии Асыл Турубаевой.

## Стек

- Next.js 16
- React 19
- TypeScript
- CSS без внешнего UI-фреймворка
- standalone-сборка для Docker/VPS

## Локальный запуск

```bash
npm install
cp .env.example .env.local
npm run dev
```

Сайт откроется на `http://localhost:3000`.

## Переменные окружения

```env
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_CONTACT_URL=https://instagram.com/assylturubayeva
```

- `NEXT_PUBLIC_SITE_URL` нужен для metadata, sitemap и robots.
- `NEXT_PUBLIC_CONTACT_URL` задаёт адрес кнопок «Обсудить проект».

## Проверка

```bash
npm run typecheck
npm run build
```

## Docker

```bash
docker build -t pocket-ai-smm-website \
  --build-arg NEXT_PUBLIC_SITE_URL=https://example.com \
  --build-arg NEXT_PUBLIC_CONTACT_URL=https://instagram.com/assylturubayeva \
  .
docker run --rm -p 3000:3000 pocket-ai-smm-website
```

> Публичные переменные Next.js встраиваются во время сборки, поэтому передавайте их через `--build-arg` или подготовленный `.env.production`.

## Развёртывание на VPS

1. Установить Docker и Nginx.
2. Собрать и запустить контейнер на `127.0.0.1:3000`.
3. Скопировать `deploy/nginx.conf.example` в конфигурацию Nginx и заменить домен.
4. Выпустить HTTPS-сертификат через Certbot.
5. После проверки подключить автоматический деплой из GitHub Actions.

## Текущий статус

Это рабочий одностраничный MVP. Перед публичным запуском нужно подтвердить:

- финальный домен;
- основной канал заявки;
- юридические страницы и политика конфиденциальности;
- реальные кейсы, тарифы и продуктовые обещания;
- Open Graph-изображение и финальный логотип.
