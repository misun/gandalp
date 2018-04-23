# json.extract! user, :id, :username, :img_url

json.id user.id
json.username user.username
json.f_name user.f_name
json.l_name user.l_name
json.created_at user.created_at
json.zip_code user.zip_code
json.img_url asset_path(user.image.url)
json.review_ids user.review_ids
