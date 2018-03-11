# == Schema Information
#
# Table name: photos
#
#  id          :integer          not null, primary key
#  img_url     :string           not null
#  user_id     :integer
#  business_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ApplicationRecord
  validates :img_url, presence: true

  belongs_to :user
  belongs_to :business

end
