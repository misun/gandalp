# json.extract! business, :id, :name, :price_range, :category, :address, :phone, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday
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
json.photo business.photos.first.image.url

json.review business.reviews.first
json.review_cnt business.reviews.count
json.user_img  business.reviews.first.user.image.url
json.avg_rating business.reviews.average(:rating).to_i
