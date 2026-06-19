package ridspa.ridspa.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ridspa.ridspa.model.productInventory;
import ridspa.ridspa.repo.productInventoryRepo;


@RestController
@RequestMapping(path="inventory")
public class productInventoryController {
    @Autowired
    productInventoryRepo repo;

    @PostMapping(path="/saveproduct")
    @CrossOrigin
    public ResponseEntity<productInventory> addProduct(@RequestBody productInventory product) throws URISyntaxException{
        productInventory add = repo.save(product);
        return ResponseEntity.created(new URI("/productInventory/saveproduct" + add.getProductcategory())).body(add);
    }

    @GetMapping(path="/allproducts")
    @CrossOrigin
    public List<productInventory> listAllProducts(){
        return repo.findAll();
}

    @GetMapping(path="/{productcategory}")
    @CrossOrigin
    public List<productInventory> listProductByCategory(@PathVariable String productcategory){
       return repo.findByProductcategory(productcategory);
    }

    @DeleteMapping(path="/deleteproduct/{id}")
    @CrossOrigin
    public ResponseEntity<?> deleteProduct(@PathVariable int id){
        repo.deleteById(id);
        return ResponseEntity.ok().build();
    }
    }
