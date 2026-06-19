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
@Table(schema="ridspa", name="memberinfo")
@Getter
@Setter
public class memberInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

     @Column(name="firstname")
    private String firstname;

    @Column(name="lastname")
    private String lastname;

    @Column(name="email")
    private String email;

    @Column(name="username")
    private String username;

    @Column(name="password")
    private String password;

    public memberInfo(){
        super();
    }

    public memberInfo(int id, String firstname, String lastname, String email, String username, String password){
        super();
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
