class Order < ApplicationRecord
	belongs_to :user
	has_many :menu_selections
end
