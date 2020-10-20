defmodule HelloFullCycleWeb.HelloController do
  use HelloFullCycleWeb, :controller

  def index(conn, _params) do
    json(conn, "Eu sou Full Cycle")
  end
end
