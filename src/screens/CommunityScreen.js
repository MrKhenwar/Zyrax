import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

const CommunityScreen = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [wordCount, setWordCount] = useState(0);
  const MAX_WORDS = 150;

  const handleAddPhoto = () => {
    Alert.alert(
      "Photo Upload",
      "This is a placeholder for photo upload functionality. To implement actual photo picking, you would need to install 'expo-image-picker'",
      [{ text: "OK" }]
    );
  };

  const handleCommentChange = (text) => {
    setComment(text);
    const words = text.trim().split(/\s+/);
    setWordCount(text.trim() === '' ? 0 : words.length);
  };

  const handlePost = () => {
    if (comment.trim() === '') {
      Alert.alert('Empty post', 'Please add a comment to post');
      return;
    }

    if (wordCount > MAX_WORDS) {
      Alert.alert('Word limit exceeded', `Please limit your comment to ${MAX_WORDS} words`);
      return;
    }

    const newComment = {
      id: Date.now().toString(),
      text: comment,
      timestamp: new Date().toLocaleString(),
    };

    setComments([newComment, ...comments]);
    setComment('');
    setWordCount(0);
  };

  const renderCommentItem = ({ item }) => (
    <View style={styles.commentItem}>
      <View style={styles.commentHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>U</Text>
        </View>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
      <Text style={styles.commentText}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <View style={styles.commentFeed}>
        <Text style={styles.sectionTitle}>Community Posts</Text>
        {comments.length > 0 ? (
          <FlatList
            data={comments}
            renderItem={renderCommentItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.commentList}
          />
        ) : (
          <Text style={styles.emptyFeed}>No posts yet. Be the first to share!</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Share your thoughts..."
          multiline
          value={comment}
          onChangeText={handleCommentChange}
          placeholderTextColor="#999" // Adjusted placeholder text color for better visibility
        />

        <View style={styles.inputActions}>
          <Text
            style={[
              styles.wordCount,
              wordCount > MAX_WORDS ? styles.overLimit : null,
            ]}
          >
            {wordCount}/{MAX_WORDS}
          </Text>

          <View style={styles.actionsRight}>
            <TouchableOpacity style={styles.photoButton} onPress={handleAddPhoto}>
              <Text style={styles.photoButtonText}>📷</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.postButton,
                (comment.trim() === '') || wordCount > MAX_WORDS
                  ? styles.disabledButton
                  : null,
              ]}
              onPress={handlePost}
            >
              <Text style={styles.postButtonText}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
  },
  commentFeed: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#A78BFA', // Vibrant purple for titles
  },
  commentList: {
    paddingBottom: 20,
  },
  emptyFeed: {
    textAlign: 'center',
    color: '#6E6E6E', // Darker grey for empty text
    marginTop: 40,
  },
  commentItem: {
    backgroundColor: '#1E1E1E', // Darker card background
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    borderColor: '#372948', // Subtle purple border
    borderWidth: 1,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#673AB7', // Deeper purple for avatar
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: 'white',
    fontWeight: 'bold',
  },
  timestamp: {
    color: '#6E6E6E',
    fontSize: 12,
  },
  commentText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#E0E0E0', // Light grey for text
  },
  inputContainer: {
    backgroundColor: '#121212', // Dark input container
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#372948', // Purple border
  },
  input: {
    backgroundColor: '#1E1E1E', // Dark input background
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    maxHeight: 100,
    minHeight: 60,
    color: '#E0E0E0', // Light grey input text
  },
  inputActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  wordCount: {
    color: '#6E6E6E',
    fontSize: 12,
  },
  overLimit: {
    color: '#FF4500', // Orange-red for over limit
  },
  actionsRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photoButton: {
    padding: 10,
    marginRight: 8,
  },
  photoButtonText: {
    fontSize: 20,
    color: '#A78BFA', // Purple icon
  },
  postButton: {
    backgroundColor: '#A78BFA', // Purple post button
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  disabledButton: {
    backgroundColor: '#6E6E6E', // Dark grey for disabled button
  },
  postButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CommunityScreen;