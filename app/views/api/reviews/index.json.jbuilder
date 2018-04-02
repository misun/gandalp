@reviews.each do |review|
  # dynamically make a key that is the id of the review
  json.set! review.id do
    json.partial! '/api/reviews/review', review: review
  end
end
