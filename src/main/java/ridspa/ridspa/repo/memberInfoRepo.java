package ridspa.ridspa.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ridspa.ridspa.model.memberInfo;

@Repository
public interface memberInfoRepo extends JpaRepository<memberInfo, Integer>{
    memberInfo findByUsername(String username);
    memberInfo findByPassword(String password);
}
