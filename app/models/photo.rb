# == Schema Information
#
# Table name: photos
#
#  id                 :integer          not null, primary key
#  business_id        :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Photo < ApplicationRecord
  validates :image, presence: true

  belongs_to :business

  has_attached_file :image, default_url: 'laduree1.jpg'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

end
