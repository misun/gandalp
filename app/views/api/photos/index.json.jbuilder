@photos.each do |photo|
  # dynamically make a key that is the id of the tweet
  json.set! photo.id do
    json.partial! '/api/photos/photo', photo: photo
  end
end
