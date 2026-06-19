package ridspa.ridspa.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ridspa.ridspa.model.memberInfo;
import ridspa.ridspa.repo.memberInfoRepo;

@RestController
@RequestMapping(path="/memberinfo")
public class memberInfoController {
    @Autowired
    memberInfoRepo repo;

    //for Sign Up Page
    @PostMapping(path="/signup")
    @CrossOrigin
    public ResponseEntity<memberInfo> newMember(@RequestBody memberInfo newMemberInfo) throws URISyntaxException{
        memberInfo create = repo.save(newMemberInfo);
        return ResponseEntity.created(new URI("/newmembers/saveMember" + create.getEmail())).body(create);
    }

    //for Log-In Page
    @PostMapping(path="/signin")
    @CrossOrigin
    public Map<String, Object> memberLogin(@RequestBody memberInfo request){
        String username = request.getUsername();
        String password = request.getPassword();

        memberInfo member = repo.findByUsername(username);
        
        Map<String, Object> response = new HashMap<>();

        if (member != null && member.getPassword().equals(password)) {
            response.put("success", true);
        } else {
            response.put("success", false);
        }

        return response;
    }
    }

