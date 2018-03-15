# == Schema Information
#
# Table name: businesses
#
#  id          :integer          not null, primary key
#  owner_id    :integer
#  name        :string           not null
#  price_range :string
#  category    :string
#  address     :string
#  phone       :string
#  monday      :string
#  tuesday     :string
#  wednesday   :string
#  thursday    :string
#  friday      :string
#  saturday    :string
#  sunday      :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Business < ApplicationRecord
  validates :name, presence: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  has_many :photos

  has_many :reviews

end
