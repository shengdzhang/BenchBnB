class Api::BenchesController < ApplicationController

  def index
    @benches = Bench.in_bounds(params[:bounds])
    render json: @benches
  end

  def create
    @bench = Bench.new(bench_params)
    @bench.save!
    render json: @bench
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :long, :lat)
  end
end
