# json.extract! business, :id, :name, :price_range, :category, :address, :phone, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday
json.business do
  json.id business.id
  json.name business.name
  json.price_range business.price_range
  json.category business.category
  json.address business.address
  json.phone business.phone
  json.monday business.monday
  json.tuesday business.tuesday
  json.wednesday business.wednesday
  json.thursday business.thursday
  json.friday business.friday
  json.saturday business.saturday
  json.sunday business.sunday
  json.review_ids business.review_ids
  json.review_cnt business.reviews.count
  json.avg_rating business.reviews.average(:rating).to_i

  json.photos photos
end

json.reviews do
  business.reviews.each do |review|
    # dynamically make a key that is the id of the tweet
    json.set! review.id do
      json.partial! '/api/reviews/review', review: review
    end
  end
end
