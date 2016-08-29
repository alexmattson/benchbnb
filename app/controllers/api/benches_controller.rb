class Api::BenchesController < ApplicationController
  def index
    @benches = bounds ? Bench.in_bounds(bounds) : Bench.all
  end

  def create
    @bench = Bench.create!(bench_params)
    render :index
  end

  private

  def bench_params
    params.require(:bench).permit(:lat, :lng, :description, :seating)
  end

  def bounds
    params[:bounds]
  end
end
