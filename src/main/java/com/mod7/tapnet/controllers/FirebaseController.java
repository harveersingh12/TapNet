package com.mod7.tapnet.controllers;

import com.google.firebase.database.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/api")
public class FirebaseController {
    
    @PostMapping("/writeData")
    public String writeData() {
        DatabaseReference ref = FirebaseDatabase.getInstance().getReference("messages");
        ref.child("message1").setValueAsync("Hello, Firebase!");
        return "Data written to Firebase";
    }

    @GetMapping("/readData")
    public CompletableFuture<String> readData() {
        CompletableFuture<String> futureResult = new CompletableFuture<>();
        DatabaseReference ref = FirebaseDatabase.getInstance().getReference("messages/message1");

        ref.addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                String message = dataSnapshot.getValue(String.class);
                futureResult.complete(message);
            }
            @Override
            public void onCancelled(DatabaseError databaseError) {
                futureResult.completeExceptionally(new RuntimeException("Error reading data: " + databaseError.getMessage()));
            }
        });
        return futureResult;
    }
}
