# json.extract! user, :id, :username, :img_url

json.id user.id
json.username user.username
json.img_url asset_path(user.image.url)
