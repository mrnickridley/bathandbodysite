package ridspa.ridspa.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface payPalUserTransactionRepo extends JpaRepository<ridspa.ridspa.model.payPalUserTransactionData,Integer>{

    
} 