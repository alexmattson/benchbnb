class Bench < ApplicationRecord
  validates :description, :seating, :lat, :lng, presence: true

  def self.in_bounds(bounds)
  max_lat = bounds['northEast']['lat']
  min_lat = bounds['southWest']['lat']
  max_lng = bounds['southWest']['lng']
  min_lng = bounds['northEast']['lng']

  Bench.where("lat < #{max_lat}")
       .where("lat > #{min_lat}")
       .where("lng > #{max_lng}")
       .where("lng < #{min_lng}")
  end

  # def self.in_bounds(bounds)
  #   self.where("lat < ?", bounds[:northEast][:lat])
  #       .where("lat > ?", bounds[:southWest][:lat])
  #       .where("lng > ?", bounds[:southWest][:lng])
  #       .where("lng < ?", bounds[:northEast][:lng])
  # end
end


{"northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"}, "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}}
