package ridspa.ridspa.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ridspa.ridspa.model.productInventory;

@Repository
public interface productInventoryRepo extends JpaRepository<productInventory, Integer>{
    productInventory findById(int id);

    List<productInventory> findByProductcategory(String category);

}
