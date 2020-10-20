defmodule HelloFullCycleWeb.Router do
  use HelloFullCycleWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", HelloFullCycleWeb do
    pipe_through :browser

    get "/", HelloController, :index
  end
end
