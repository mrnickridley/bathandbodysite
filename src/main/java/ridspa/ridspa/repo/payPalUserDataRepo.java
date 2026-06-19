package ridspa.ridspa.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ridspa.ridspa.model.payPalUserData;

@Repository
public interface payPalUserDataRepo extends JpaRepository<payPalUserData, Integer> {
    payPalUserData findByOrderId(String orderId);
}
