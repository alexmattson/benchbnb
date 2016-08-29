@benches.each do |bench|
  json.set! bench.id do
    json.extract! bench,
      :id, :lat, :lng
  end
end
