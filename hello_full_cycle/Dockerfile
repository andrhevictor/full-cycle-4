FROM elixir:1.10-slim

RUN mix local.hex --force && mix local.rebar --force

RUN mkdir /app
COPY . /app
WORKDIR /app

EXPOSE 8080

CMD ["mix", "phx.server"]