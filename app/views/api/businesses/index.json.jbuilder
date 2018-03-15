@businesses.each do |biz|
  # dynamically make a key that is the id of the tweet
  json.set! biz.id do
    json.partial! '/api/businesses/business_index', business: biz
  end
end
