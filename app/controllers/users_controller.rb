class UsersController < ApplicationController
  def index
    @users = User.order(created_at: :desc)
  end

  def bulk_update
    # binding.b
    @selected_users = User.where(id: params.fetch(:user_ids, []).compact)
    if params[:commit] == 'disabled'
      @selected_users.update_all(status: :disabled)
    elsif params[:commit] == 'active'
      @selected_users.each { |u| u.active! }
    end
    flash[:notice] = "#{@selected_users.count} users marked as #{params[:commit]}"
    redirect_to action: :index
  end
end
