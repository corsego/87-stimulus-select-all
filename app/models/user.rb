class User < ApplicationRecord
  enum status: { active: 'active', disabled: 'disabled' }
end
