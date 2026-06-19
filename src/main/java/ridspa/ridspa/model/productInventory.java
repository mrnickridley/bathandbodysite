package ridspa.ridspa.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(schema="ridspa", name="productinventory")
@Getter
@Setter
public class productInventory{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="productname")
    private String productname;

    @Column(name="productdescription")
    private String productdescription;

    @Column(name="productprice")
    private double productprice;

    @Column(name="productcategory")
    private String productcategory;

    @Column(name="productsize")
    private String productsize;

    @Column(name="productsex")
    private String productsex;

    @Column(name="productphotopath")
    private String productphotopath;

    public productInventory(){
        super();
    }

    public productInventory(int id, String productname, String productdescription,double productprice, 
                            String productcategory, String productsize, String productsex, String productphotopath){
        super();
        this.id = id;
        this.productname = productname;
        this.productdescription = productdescription;
        this.productprice = productprice;
        this.productcategory = productcategory;
        this.productsize = productsize;
        this.productsex = productsex;
        this.productphotopath = productphotopath;
    }

}
