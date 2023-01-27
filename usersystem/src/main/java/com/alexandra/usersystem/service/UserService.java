package com.alexandra.usersystem.service;
import com.alexandra.usersystem.model.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    List<User> getAllUsers();

}
