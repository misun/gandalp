json.id review.id
json.business_id review.business_id
json.user_id review.user_id
json.rating review.rating
json.body review.body
json.created_at review.created_at.strftime("%m/%d/%Y")
json.updated_at review.updated_at
json.img_url asset_path(review.image.url)
json.user do
  json.id review.user.id
  json.username review.user.username
  json.f_name review.user.f_name
  json.l_lame review.user.l_name
  json.img_url asset_path(review.user.image.url)
end
