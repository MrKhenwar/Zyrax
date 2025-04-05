// app/(tabs)/community.tsx
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Keyboard,
} from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol'; // Assuming you have this

interface Comment {
  id: string;
  text: string;
  timestamp: string;
  user?: string;
}

const CommunityScreen = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);
  const [wordCount, setWordCount] = useState(0);
  const MAX_WORDS = 150;
  const commentInputRef = useRef<TextInput>(null);

  const handleAddPhoto = () => {
    Alert.alert(
      "Photo Upload",
      "This is a placeholder...",
      [{ text: "OK" }]
    );
  };

  const handleCommentChange = (text) => {
    setComment(text);
    const words = text.trim().split(/\s+/);
    setWordCount(text.trim() === '' ? 0 : words.length);
  };

  const handlePost = () => {
    if (comment.trim() === '') return;
    if (wordCount > MAX_WORDS) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      text: comment,
      timestamp: new Date().toLocaleString(),
      user: 'You',
    };

    setComments([newComment, ...comments]);
    setComment('');
    setWordCount(0);
    Keyboard.dismiss(); // Dismiss keyboard after posting
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const renderCommentItem = ({ item }: { item: Comment }) => (
    <View style={styles.commentItem}>
      <View style={styles.commentHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{item.user?.charAt(0).toUpperCase() || 'U'}</Text>
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
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 70} // Increased offset
    >
      <View style={styles.commentFeed}>
        <Text style={[styles.sectionTitle, { marginTop: 50 }]}>Community Posts</Text>
        {comments.length > 0 ? (
          <FlatList
            data={comments}
            renderItem={renderCommentItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.commentList}
            inverted
          />
        ) : (
          <Text style={styles.emptyFeed}>No posts yet. Be the first to share!</Text>
        )}
      </View>

      <View style={[styles.inputContainer, styles.safeBottom]}>
        <TextInput
          ref={commentInputRef}
          style={styles.input}
          placeholder="Share your thoughts..."
          multiline
          value={comment}
          onChangeText={handleCommentChange}
          placeholderTextColor="#999"
          blurOnSubmit={false} // Prevent keyboard dismissal on submit (we have a custom button)
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
              <IconSymbol size={24} name="camera" color="#A78BFA" />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.postButton,
                (comment.trim() === '' || wordCount > MAX_WORDS) ? styles.disabledButton : null,
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
    backgroundColor: '#121212',
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
    color: '#A78BFA',
  },
  commentList: {
    paddingBottom: 20,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  emptyFeed: {
    textAlign: 'center',
    color: '#6E6E6E',
    marginTop: 40,
  },
  commentItem: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderColor: '#372948',
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
    backgroundColor: '#673AB7',
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
    color: '#E0E0E0',
  },
  inputContainer: {
    backgroundColor: '#121212',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#372948',
    paddingBottom: Platform.OS === 'ios' ? 30 : 16,
  },
  safeBottom: {
    paddingBottom: Platform.select({
      ios: 90, // Increased bottom padding for iOS
      android: 70, // Added bottom padding for Android
    }),
  },
  input: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    maxHeight: 100,
    minHeight: 60,
    color: '#E0E0E0',
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
    color: '#FF4500',
  },
  actionsRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photoButton: {
    padding: 10,
    marginRight: 8,
  },
  postButton: {
    backgroundColor: '#A78BFA',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  disabledButton: {
    backgroundColor: '#6E6E6E',
  },
  postButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  doneButton: {
    backgroundColor: '#673AB7',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  doneButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CommunityScreen;