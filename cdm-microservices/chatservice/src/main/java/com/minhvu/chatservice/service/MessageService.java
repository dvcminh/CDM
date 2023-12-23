package com.minhvu.chatservice.service;

import com.minhvu.chatservice.model.Message;
import com.minhvu.chatservice.model.Status;
import com.minhvu.chatservice.repository.MessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MessageService {

    private final MessageRepository messageRepository;

    public Message saveMessage(Message message) {
        return messageRepository.save(message);
    }

    public List<Message> loadPublicMessages() {
        return messageRepository.findByReceiverNameAndStatusAllIgnoreCaseOrderByDateAsc("public", Status.MESSAGE);
    }

    public List<Message> loadPrivateMessages(String senderName, String receiverName) {
        return messageRepository.findBySenderNameAndReceiverNameAndStatusAllIgnoreCaseOrderByDateAsc(senderName, receiverName, Status.MESSAGE);
    }


}